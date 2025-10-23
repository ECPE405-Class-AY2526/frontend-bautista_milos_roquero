import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 

const DashboardScreen = () => {
  const [targetTemp, setTargetTemp] = useState("");
  const [targetMoisture, setTargetMoisture] = useState("");

  const handleApply = () => {
    console.log("Applied:", { targetTemp, targetMoisture });
  };

  return (
    <SafeAreaView style={styles.safeArea}> 
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Status */}
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

export default DashboardScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
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
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  applyBtn: {
    backgroundColor: "#22c55e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
