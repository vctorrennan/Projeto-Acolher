import { Feather } from '@expo/vector-icons';
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = {
  principal: '#00BFA5',
  secondary: '#E67E22',
  bg: '#F8F9FA',
  white: '#FFFFFF',
  text: '#333333',
  lightText: '#999999',
  cardBg: '#F0FFF4',
};

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* SAUDAÇÃO */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Bolsonaro</Text>
          <Text style={styles.subGreeting}>Como você está se sentindo hoje?</Text>
          
          <View style={styles.moodRow}>
            <MoodItem label="Feliz" emoji="😃" />
            <MoodItem label="Triste" emoji="😥" />
            <MoodItem label="Ansioso" emoji="🤯" />    
            <MoodItem label="Neutro" emoji="😐" />
          </View>
        </View>

        {/* PRECISA DE AJUDA */}
        <TouchableOpacity style={styles.helpCard} activeOpacity={0.7}>
          <View style={styles.helpIconCircle}>
            <Feather name="help-circle" color={COLORS.secondary} size={22} />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.helpTitle}>Precisa de ajuda?</Text>
            <Text style={styles.helpSub}>Solicite apoio humanizado agora</Text>
          </View>
          <Feather name="chevron-right" color="#CCC" size={20} />
        </TouchableOpacity>

        {/* Mensagens Motivacionais */}
        <SectionHeader title="Mensagens Motivacionais"/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList} contentContainerStyle={{ paddingRight: 40 }}>
          <GroupCard title="Ansiedade" icon={<Feather name="zap" color="#666" size={28} />} />
          <GroupCard title="Tristeza" icon={<Feather name="frown" color="#666" size={28} />} />
          <GroupCard title="Autoestima" icon={<Feather name="heart" color="#666" size={28} />} />
        </ScrollView>

        {/* CONTEÚDO PARA VOCÊ */}
        <SectionHeader title="Conteúdos para Você" />
        <TouchableOpacity style={styles.contentCard} activeOpacity={0.8}>
          <View style={styles.contentIconBox}>
             <Feather name="heart" color={COLORS.principal} size={24} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.contentTag}>TÉCNICA</Text>
            <Text style={styles.contentTitle}>Respiração 4-7-8 para Acalmar</Text>
            <Text style={styles.contentTime}>3 min de leitura</Text>
          </View>
          <Feather name="chevron-right" color="#EEE" size={24} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// Componentes Auxiliares
const MoodItem = ({ label, emoji }: any) => (
  <View style={styles.moodItem}>
    <TouchableOpacity style={styles.moodCircle}>
      <Text style={{ fontSize: 20 }}>{emoji}</Text>
    </TouchableOpacity>
    <Text style={styles.moodLabel}>{label}</Text>
  </View>
);

const SectionHeader = ({ title }: any) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.seeAllText}>Ver todos</Text>
    </TouchableOpacity>
  </View>
);

const GroupCard = ({ title, icon }: any) => (
  <View style={styles.groupCard}>
    <View style={styles.groupIconContainer}>{icon}</View>
    <Text style={styles.groupCardTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    backgroundColor: COLORS.principal,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 60, // Aumentado para dar espaço ao card que sobrepõe
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  greeting: { fontSize: 24, fontWeight: 'bold', color: COLORS.white },
  subGreeting: { color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 20 },
  moodRow: { flexDirection: 'row', justifyContent: 'space-between' },
  moodItem: { alignItems: 'center' },
  moodCircle: { width: 50, height: 50, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  moodLabel: { color: COLORS.white, fontSize: 12, marginTop: 8 },
  helpCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: 25,
    marginTop: -30, // Faz o card "flutuar" sobre o header
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  helpIconCircle: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#FFF5EB', justifyContent: 'center', alignItems: 'center' },
  helpTitle: { color: COLORS.secondary, fontWeight: 'bold', fontSize: 15 },
  helpSub: { color: COLORS.lightText, fontSize: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 30, alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  seeAllText: { color: COLORS.principal, fontSize: 12, fontWeight: '600' },
  horizontalList: { paddingLeft: 25, marginTop: 15 },
  groupCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 25,
    marginRight: 15,
    width: 140,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  groupIconContainer: { marginBottom: 10 },
  groupCardTitle: { fontWeight: 'bold', fontSize: 14, color: COLORS.text },
  contentCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: 25,
    marginTop: 15,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  contentIconBox: { width: 50, height: 50, backgroundColor: COLORS.cardBg, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  contentTag: { fontSize: 9, color: COLORS.principal, fontWeight: 'bold', marginBottom: 2 },
  contentTitle: { fontWeight: 'bold', color: COLORS.text, fontSize: 14 },
  contentTime: { fontSize: 11, color: COLORS.lightText, marginTop: 2 },
});