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

import { arrCoordMarker } from '../../utils/data'; 

export function LocationPoint() {
  const lati = -16.3923183;
  const long = -48.9817117;
  const latdelta = 0.00922;
  const londelta = 0.00421;
  const coordinateMarker = 
    {
      latitude: -16.3923183,
      longitude: -48.9817117,
    }

  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordMarker, setCoordMarker] = useState({
    latitude: lati,
    longitude: long
  });
  const [origin, setOrigin] = useState({
    latitude: lati,
    longitude: long,
    latitudeDelta: latdelta,
    longitudeDelta: londelta,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let newLocation = await Location.getCurrentPositionAsync({});
      setOrigin({
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
        latitudeDelta: latdelta,
        longitudeDelta: londelta
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
            {
              arrCoordMarker.map(item => (
                <Marker
                  key={item.id}
                  coordinate={item.coordinate}
                  title={item.title}
                  description={item.description}
                />
              ))
            }
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
