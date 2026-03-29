import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../components/constants';
import { styles } from '../components/styles';

export default function MotivacionaisScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const itens = [
    { id: '1', title: 'Ansiedade', icon: 'zap' },
    { id: '2', title: 'Tristeza', icon: 'frown' },
    { id: '3', title: 'Autoestima', icon: 'heart' },
    { id: '4', title: 'Estresse', icon: 'wind' },
    { id: '5', title: 'Medo', icon: 'shield-off' },
    { id: '6', title: 'Insegurança', icon: 'unlock' },
    { id: '7', title: 'Motivação Diária', icon: 'sun' },
    { id: '8', title: 'Evolução Pessoal', icon: 'trending-up' },
    { id: '9', title: 'Solidão', icon: 'user' },
    { id: '10', title: 'Pensamentos Negativos', icon: 'cloud' },
  ];

  const filteredItens = itens.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: COLORS.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mensagens Motivacionais</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color={COLORS.lightText} style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar tema..."
          placeholderTextColor={COLORS.lightText}
          value={search}
          onChangeText={setSearch}
        />
        {search !== '' && (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Feather name="x" size={18} color={COLORS.lightText} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        {filteredItens.length > 0 ? (
          filteredItens.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.7}>
              <View style={styles.menuIconBg}>
                <Feather name={item.icon as any} size={22} color={COLORS.principal} />
              </View>
              <Text style={styles.cardText}>{item.title}</Text>
              <Feather name="chevron-right" size={20} color="#CCC" />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhum tema encontrado.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}