import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../components/constants';
import { styles } from '../components/styles';

export default function Dashboard() {
  const router = useRouter();

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

        {/* PRECISA DE AJUDA? */}
        <TouchableOpacity 
          style={styles.helpCard} 
          activeOpacity={0.7} 
          onPress={() => router.push('/apoio')}
        >
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
        <SectionHeader 
          title="Mensagens Motivacionais" 
          onPress={() => router.push('/motivacionais')} 
        />
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.horizontalList} 
          contentContainerStyle={{ paddingRight: 40 }}
        >
          <GroupCard title="Ansiedade" icon={<Feather name="zap" color="#666" size={28} />} />
          <GroupCard title="Tristeza" icon={<Feather name="frown" color="#666" size={28} />} />
          <GroupCard title="Autoestima" icon={<Feather name="heart" color="#666" size={28} />} />
        </ScrollView>

        {/* CONTEÚDO PARA VOCÊ */}
        <SectionHeader title="Conteúdos para Você" />
        <TouchableOpacity style={styles.contentCard} activeOpacity={0.5}>
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

// --- Componentes Auxiliares ---

const MoodItem = ({ label, emoji }: any) => (
  <View style={styles.moodItem}>
    <TouchableOpacity style={styles.moodCircle}>
      <Text style={{ fontSize: 20 }}>{emoji}</Text>
    </TouchableOpacity>
    <Text style={styles.moodLabel}>{label}</Text>
  </View>
);

const SectionHeader = ({ title, onPress }: any) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {onPress && (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.seeAllText}>Ver todos</Text>
      </TouchableOpacity>
    )}
  </View>
);

const GroupCard = ({ title, icon }: any) => (
  <View style={styles.groupCard}>
    <View style={styles.groupIconContainer}>{icon}</View>
    <Text style={styles.groupCardTitle}>{title}</Text>
  </View>
);