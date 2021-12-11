import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ActivityIndicator, FlatList} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const handleProductSelect = id => {
    navigation.navigate('DetailPage',{id});
  };
  const {loading, data, error} = useFetch(Config.API_URL); //customHook tanımlandı veri ordan geliyor
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};
export default Products;
