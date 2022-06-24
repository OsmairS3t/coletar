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
  PointDescription
} from './styles';
import { Header } from '../../components/Header';

import { places } from '../../utils/data';
import { IPlace } from '../../utils/interface';
import { Footer } from '../../components/Footer';

export function LocationPoint() {
  const lati = -16.3923183;
  const long = -48.9817117;
  const latdelta = 0.00922;
  const londelta = 0.00421;
  const navigation = useNavigation();
  const [errorMsg, setErrorMsg] = useState(null);
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
    })();
  }, [])

  function handleBack() {
    navigation.navigate('home');
  }

  function handleDetailPoint(localPoint: IPlace) {
    navigation.navigate('detailpoint', localPoint);
  }

  return (
    <>
      <Header onBack={handleBack} />
      <Container>
        <Form>
          <GroupForm>
            <Title>Locais cadastrados:</Title>
            <Mapa
              initialRegion={origin}
              showUserLocation={true}
              loadingEnabled={true}
            >
              {
                places.map(item => (
                  <Marker
                    key={item.id}
                    coordinate={item.coordinate}
                    title={item.name}
                    description={item.description}
                    onCalloutPress={() => handleDetailPoint(item)}
                  />
                ))
              }
            </Mapa>
          </GroupForm>
        </Form>
      </Container>
      <Footer />
    </>
  )
}
