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

export function LocationPoint() {
  const lati = -16.394840;
  const long = -48.982879;
  const londelta = 0.09;
  const latdelta = 0.04;
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordMarker, setCoordMarker] = useState({
    latitude: lati,
    longitude: long
  });

  const [origin, setOrigin] = useState({
    latitude: long,
    longitude: lati,
    latitudeDelta: londelta,
    longitudeDelta: latdelta,
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
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
        latitudeDelta: londelta,
        longitudeDelta: latdelta
      })
      setCoordMarker({
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude
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
                latitude: lati,
                longitude: long
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
