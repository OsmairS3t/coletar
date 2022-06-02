import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Modal, Image } from 'react-native';
import { Select } from '../../components/Forms/Select';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import {
  Container,
  Title,
  Form,
  GroupForm,
  Mapa,
  ListSelect,
  ItemSelect,
  ButtonSelect,
  TitleButtonSelect,
  PointDescription
} from './styles';
import { Header } from '../../components/Header';

const logotipoColetar = '../../assets/logotipoColetar.png';

export function Search() {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordMarker, setCoordMarker] = useState({
    latitude: -16.394840,
    longitude: -48.982879
  });

  const [origin, setOrigin] = useState({
    latitude: -16.394840,
    longitude: -48.982879,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let newLocation = await Location.getCurrentPositionAsync({});
      setLocation(newLocation);
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: -16.394840,
        longitudeDelta: -48.982879
      })
      setCoordMarker({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })();
  }, [])

  function handleBack() {
    navigation.navigate('home');
  }

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  return (
    <Container>
      <Header onBack={handleBack} />

      <Form>
        <GroupForm>
          <Title>Busca Pontos de Coleta</Title>
          
          <Select
            label='Tipos de pontos de coleta'
            placeholder='Coleta seletiva'
            onPress={handleModalOpen}
          />

          <Mapa
            initialRegion={origin}
            showUserLocation={true}
            loadingEnabled={true}
          >
            <Marker
              coordinate={{
                latitude: coordMarker.latitude,
                longitude: coordMarker.longitude
              }}
              title={"Title"}
              description={"description"}
            />
          </Mapa>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalOpen(!modalOpen);
            }}
          >
            <ListSelect>
              <ItemSelect>Coleta Seletiva</ItemSelect>
              <ItemSelect>Local para depósito de Insumos</ItemSelect>
            </ListSelect>
            <ButtonSelect
              onPress={handleModalClose}
            >
              <TitleButtonSelect>Selecionar</TitleButtonSelect>
            </ButtonSelect>
          </Modal>
        </GroupForm>

        <PointDescription>
          <Image source={require('../../assets/footerImg.png')} />
        </PointDescription>
      </Form>
    </Container>

  )
}
