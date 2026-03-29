import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#00BFA5', // Verde principal
      tabBarInactiveTintColor: '#BDC3C7', // Cinza inativo
      headerShown: false,
      tabBarStyle: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
      },
      tabBarLabelStyle: {
        fontSize: 11,
        fontWeight: '500',
      }
    }}>
      {/* INÍCIO (index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />

      {/* CHAT (chat.tsx) */}
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Feather name="users" size={24} color={color} />,
        }}
      />

      {/* APOIO (apoio.tsx) */}
      <Tabs.Screen
        name="apoio"
        options={{
          title: 'Apoio',
          tabBarIcon: ({ color }) => <Feather name="heart" size={24} color={color} />,
        }}
      />

      {/* PERFIL (perfil.tsx) */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}