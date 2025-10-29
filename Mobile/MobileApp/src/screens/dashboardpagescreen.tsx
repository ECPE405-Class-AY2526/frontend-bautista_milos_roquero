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
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rice Dryer Dashboard</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Status Section */}
        <View style={styles.statusRow}>
          <View style={styles.statusBox}>
            <Text style={styles.statusTitle}>Status</Text>
            <Text style={styles.statusValue}>Drying</Text>
          </View>
        </View>

        {/* Live Sensors */}
        <Text style={styles.sectionTitle}>Live Sensors</Text>

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
      </ScrollView>
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
});

export default DashboardScreen;