import { StyleSheet } from 'react-native';
import { COLORS } from './constants'; // Importação correta para arquivos na mesma pasta

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  
  // Styles compartilhados
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: COLORS.text,
    marginBottom: 15 
  },

  // Styles da tela Dashboard
  header: {
    backgroundColor: COLORS.principal,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 60,
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
    marginTop: -30,
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


  // Styles da tela de Perfil 
  profileHeader: {
    backgroundColor: COLORS.principal,
    paddingTop: 40,
    paddingBottom: 60,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center',
  },
  avatarContainer: { position: 'relative' },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 4, 
    borderColor: 'rgba(255,255,255,0.3)' 
  },
  editBadge: {
    position: 'absolute', 
    bottom: 0, 
    right: 0,
    backgroundColor: COLORS.secondary,
    width: 32, 
    height: 32, 
    borderRadius: 16,
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 3, 
    borderColor: COLORS.principal
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
  divider: { width: 1, backgroundColor: '#EEEEEE', height: '100%' },
  menuSection: { marginTop: 30, paddingHorizontal: 25 },
  menuButton: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15, 
    borderRadius: 15, 
    marginBottom: 10
  },
  menuIconBg: { 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    backgroundColor: '#F0FFF4', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15 
  },
  menuLabel: { flex: 1, fontSize: 14, color: COLORS.text, fontWeight: '500' },
  logoutButton: { flexDirection: 'row', alignItems: 'center', padding: 15, marginTop: 10 },
  logoutText: { color: '#FF5252', fontWeight: 'bold', marginLeft: 10, fontSize: 14 },


  // Styles da tela das mensagens motivacionais 
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 50,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  searchIcon: { marginRight: 10 },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
  },
  
  // Cards da tela das mensagens motivacionais 
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardText: { 
    flex: 1, 
    fontWeight: '600', 
    fontSize: 16, 
    color: COLORS.text 
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: COLORS.lightText,
    fontSize: 16,
  },

   headerTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: COLORS.text 
  },
});
