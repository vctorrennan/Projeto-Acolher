import { Feather } from '@expo/vector-icons';
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = {
  principal: '#00BFA5',
  secondary: '#E67E22',
  bg: '#F8F9FA',
  white: '#FFFFFF',
  text: '#333333',
  lightText: '#999999',
  border: '#EEEEEE',
};

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* HEADER DO PERFIL */}
        <View style={styles.header}>
          <View style={styles.profileInfo}>
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

        {/* ESTATÍSTICAS RÁPIDAS */}
        <View style={styles.statsContainer}>
          <StatItem label="Humor Médio" value="Feliz 😃" />
          <View style={styles.divider} />
          <StatItem label="Dias Ativo" value="12 Dias" />
        </View>

        {/* OPÇÕES DE CONFIGURAÇÃO */}
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    backgroundColor: COLORS.principal,
    paddingTop: 40,
    paddingBottom: 60,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center',
  },
  profileInfo: { alignItems: 'center' },
  avatarContainer: { position: 'relative' },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: 'rgba(255,255,255,0.3)' },
  editBadge: {
    position: 'absolute', bottom: 0, right: 0,
    backgroundColor: COLORS.secondary,
    width: 32, height: 32, borderRadius: 16,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: COLORS.principal
  },
  userName: { fontSize: 22, fontWeight: 'bold', color: COLORS.white, marginTop: 15 },
  userEmail: { color: 'rgba(255,255,255,0.8)', fontSize: 14 },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: 25,
    marginTop: -30,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  statLabel: { fontSize: 12, color: COLORS.lightText, marginTop: 4 },
  divider: { width: 1, backgroundColor: COLORS.border, height: '100%' },
  menuSection: { marginTop: 30, paddingHorizontal: 25 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 15 },
  menuButton: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15, borderRadius: 15, marginBottom: 10
  },
  menuIconBg: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#F0FFF4', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  menuLabel: { flex: 1, fontSize: 14, color: COLORS.text, fontWeight: '500' },
  logoutButton: { flexDirection: 'row', alignItems: 'center', padding: 15, marginTop: 10 },
  logoutText: { color: '#FF5252', fontWeight: 'bold', marginLeft: 10, fontSize: 14 },
});