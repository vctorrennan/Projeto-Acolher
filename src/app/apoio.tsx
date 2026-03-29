import { Feather } from '@expo/vector-icons';
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = { principal: '#00BFA5', secondary: '#E67E22', bg: '#F8F9FA', white: '#FFFFFF' };

export default function Apoio() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>Centro de Apoio</Text></View>
      <View style={{ padding: 25, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Feather name="heart" size={80} color={COLORS.principal} style={{ marginBottom: 20 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Você não está sozinho.</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Falar com um voluntário</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { padding: 20, backgroundColor: COLORS.white, borderBottomWidth: 1, borderBottomColor: '#EEE', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold' },
  btn: { backgroundColor: COLORS.secondary, padding: 15, borderRadius: 12, marginTop: 30, width: '100%', alignItems: 'center' }
});