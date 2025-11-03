import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import useAuthStore from "../store/authStore";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  LandingPage: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { logout } = useAuthStore();
  const [targetTemp, setTargetTemp] = useState("");
  const [targetMoisture, setTargetMoisture] = useState("");
  const [view, setView] = useState<'dashboard' | 'analytics' | 'history' | 'settings' | 'alerts'>('dashboard');
  const insets = useSafeAreaInsets();

  const handleApply = () => {
    console.log("Applied:", { targetTemp, targetMoisture });
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: async () => {
            try {
              await logout();
              navigation.reset({
                index: 0,
                routes: [{ name: 'LandingPage' }],
              });
            } catch (error) {
              console.error('Logout error:', error);
              Alert.alert('Error', 'Failed to logout. Please try again.');
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top','bottom']}>
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 96 + insets.bottom }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Rice Grain Drying System Dashboard</Text>
          <Text style={styles.pageSubtitle}>Real-time monitoring and control interface</Text>
        </View>
        {view !== 'dashboard' && (
          <>
            <Text style={styles.sectionTitle}>
              {view === 'analytics' ? 'Analytics' : view === 'history' ? 'History' : view === 'settings' ? 'Settings' : 'Alerts'}
            </Text>
            <View style={styles.card}>
              <Text style={styles.label}>
                {(view.charAt(0).toUpperCase() + view.slice(1)) + ' placeholder'}
              </Text>
              <Text style={styles.sub}>Coming soon</Text>
            </View>
          </>
        )}
        <View style={view !== 'dashboard' ? { display: 'none' } : undefined}>
        {/* Status Section */}
        <View style={styles.statusGrid}>
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>System Status</Text>
            <Text style={styles.statusValue}>Drying</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Gateway Status</Text>
            <Text style={styles.statusValue}>Online</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Active Sensors</Text>
            <Text style={styles.statusValue}>3/3</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}>Actuators Online</Text>
            <Text style={styles.statusValue}>3/3</Text>
          </View>
        </View>

        {/* Sensor Readings */}
        <Text style={styles.sectionTitle}>Sensor Readings</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Temperature</Text>
          <Text style={styles.value}>55.6 °C</Text>
          <Text style={styles.sub}>Normal (50–60 °C)</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Humidity</Text>
          <Text style={styles.value}>39 %</Text>
          <Text style={styles.sub}>Normal (≤ 65%)</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Moisture Content</Text>
          <Text style={styles.value}>16.4 %</Text>
          <Text style={styles.sub}>Target 15–16%</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Current Weight</Text>
          <Text style={styles.value}>16.4 kg</Text>
          <Text style={styles.sub}>Initial 20 kg</Text>
        </View>

        {/* System Controls */}
        <Text style={styles.sectionTitle}>System Controls</Text>
        <View style={styles.controls}>
          <Text style={styles.label}>Target Temperature (°C)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter target temperature"
            value={targetTemp}
            onChangeText={setTargetTemp}
          />

          <Text style={styles.label}>Target Moisture (%)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter target moisture"
            value={targetMoisture}
            onChangeText={setTargetMoisture}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
      <View style={[
        styles.bottomNav,
        { height: 64 + insets.bottom, paddingBottom: insets.bottom, zIndex: 10 }
      ]}>
        <TouchableOpacity style={[styles.bottomNavItem, view === 'dashboard' && styles.bottomNavItemActive]} onPress={() => setView('dashboard')}>
          <Text style={[styles.bottomNavLabel, view === 'dashboard' && styles.bottomNavLabelActive]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomNavItem, view === 'analytics' && styles.bottomNavItemActive]} onPress={() => setView('analytics')}>
          <Text style={[styles.bottomNavLabel, view === 'analytics' && styles.bottomNavLabelActive]}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomNavItem, view === 'history' && styles.bottomNavItemActive]} onPress={() => setView('history')}>
          <Text style={[styles.bottomNavLabel, view === 'history' && styles.bottomNavLabelActive]}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomNavItem, view === 'settings' && styles.bottomNavItemActive]} onPress={() => setView('settings')}>
          <Text style={[styles.bottomNavLabel, view === 'settings' && styles.bottomNavLabelActive]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomNavItem, view === 'alerts' && styles.bottomNavItemActive]} onPress={() => setView('alerts')}>
          <Text style={[styles.bottomNavLabel, view === 'alerts' && styles.bottomNavLabelActive]}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={handleLogout}>
          <Text style={styles.bottomNavLabel}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  safeArea: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  logoutButton: ViewStyle;
  logoutText: TextStyle;
  container: ViewStyle;
  pageHeader: ViewStyle;
  pageTitle: TextStyle;
  pageSubtitle: TextStyle;
  statusGrid: ViewStyle;
  statusCard: ViewStyle;
  statusRow: ViewStyle;
  statusBox: ViewStyle;
  statusTitle: TextStyle;
  statusValue: TextStyle;
  sectionTitle: TextStyle;
  card: ViewStyle;
  label: TextStyle;
  value: TextStyle;
  sub: TextStyle;
  controls: ViewStyle;
  input: ViewStyle;
  buttonRow: ViewStyle;
  applyBtn: ViewStyle;
  btnText: TextStyle;
  bottomNav: ViewStyle;
  bottomNavItem: ViewStyle;
  bottomNavItemActive: ViewStyle;
  bottomNavLabel: TextStyle;
  bottomNavLabelActive: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#dc3545',
    borderRadius: 6,
    elevation: 1,
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 96, // space for bottom nav
  },
  pageHeader: {
    marginBottom: 8,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  statusCard: {
    width: '48%',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    alignItems: 'center',
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusBox: {
    flex: 1,
    backgroundColor: "#f9fafb",
    margin: 5,
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  statusTitle: {
    fontSize: 14,
    color: "#6b7280",
  },
  statusValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 15,
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 5,
  },
  sub: {
    fontSize: 12,
    color: "#6b7280",
  },
  controls: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 15,
    marginVertical: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  buttonRow: {
    marginTop: 15,
  },
  applyBtn: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 6,
  },
  bottomNavItem: {
    flex: 1,
    height: 40,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavItemActive: {
    backgroundColor: 'rgba(34,197,94,0.12)',
    borderWidth: 1,
    borderColor: '#22c55e',
  },
  bottomNavLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
  },
  bottomNavLabelActive: {
    color: '#22c55e',
  },
});

export default DashboardScreen;