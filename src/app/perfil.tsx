import { Feather } from '@expo/vector-icons';
import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../components/constants';
import { styles } from '../components/styles';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* HEADER DO PERFIL */}
        <View style={styles.profileHeader}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: 'https://avatar.iran.liara.run/public/38' }} 
                style={styles.avatar} 
              />
              <TouchableOpacity style={styles.editBadge}>
                <Feather name="camera" size={14} color={COLORS.white} />
              </TouchableOpacity>
            </View>
            <Text style={styles.userName}>Bolsonaro</Text>
            <Text style={styles.userEmail}>Bolsonaro@gmail.com</Text>
          </View>
        </View>

        {/* ESTATÍSTICAS */}
        <View style={styles.statsContainer}>
          <StatItem label="Humor Médio" value="Feliz 😃" />
          <View style={styles.divider} />
          <StatItem label="Dias Ativo" value="12 Dias" />
        </View>

        {/* CONFIGURAÇÃO */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Minha Conta</Text>
          <MenuButton icon="user" label="Dados Pessoais" />
          <MenuButton icon="bell" label="Notificações" />
          <MenuButton icon="shield" label="Privacidade e Segurança" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Suporte</Text>
          <MenuButton icon="help-circle" label="Central de Ajuda" />
          <MenuButton icon="file-text" label="Termos de Uso" />
          
          <TouchableOpacity style={styles.logoutButton}>
            <Feather name="log-out" size={20} color="#FF5252" />
            <Text style={styles.logoutText}>Sair da Conta</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const StatItem = ({ label, value }: any) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const MenuButton = ({ icon, label }: any) => (
  <TouchableOpacity style={styles.menuButton}>
    <View style={styles.menuIconBg}>
      <Feather name={icon} size={20} color={COLORS.principal} />
    </View>
    <Text style={styles.menuLabel}>{label}</Text>
    <Feather name="chevron-right" size={18} color="#CCC" />
  </TouchableOpacity>
);