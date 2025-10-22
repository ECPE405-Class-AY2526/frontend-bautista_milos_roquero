import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

const DashboardScreen = () => {
  const [targetTemp, setTargetTemp] = useState(56);
  const [targetMoisture, setTargetMoisture] = useState(12);
  const [ventLevel, setVentLevel] = useState(3);

  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.sub}>Normal (50-60 °C)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Humidity</Text>
        <Text style={styles.value}>39 %</Text>
        <Text style={styles.sub}>Normal (≤ 65%)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Moisture Content</Text>
        <Text style={styles.value}>16.4 %</Text>
        <Text style={styles.sub}>Target 15-16%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Current Weight</Text>
        <Text style={styles.value}>16.4 kg</Text>
        <Text style={styles.sub}>Initial 20 kg</Text>
      </View>

      {/* System Controls */}
      <Text style={styles.sectionTitle}>System Controls</Text>
      <View style={styles.controls}>
        <Text style={styles.label}>Target Temperature: {targetTemp}°C</Text>
        <Slider
          minimumValue={40}
          maximumValue={80}
          step={1}
          value={targetTemp}
          onValueChange={setTargetTemp}
          minimumTrackTintColor="#22c55e"
          maximumTrackTintColor="#ccc"
        />

        <Text style={styles.label}>Target Moisture: {targetMoisture}%</Text>
        <Slider
          minimumValue={5}
          maximumValue={30}
          step={1}
          value={targetMoisture}
          onValueChange={setTargetMoisture}
          minimumTrackTintColor="#22c55e"
          maximumTrackTintColor="#ccc"
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.btnText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginVertical: 10 },
  statusRow: { flexDirection: "row", justifyContent: "space-between" },
  statusBox: {
    flex: 1,
    backgroundColor: "#f9fafb",
    margin: 5,
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  statusTitle: { fontSize: 14, color: "#6b7280" },
  statusValue: { fontSize: 16, fontWeight: "600" },
  card: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 15,
    marginVertical: 6,
  },
  label: { fontSize: 14, fontWeight: "500" },
  value: { fontSize: 18, fontWeight: "700", marginVertical: 5 },
  sub: { fontSize: 12, color: "#6b7280" },
  controls: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 15,
    marginVertical: 6,
  },
  buttonRow: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
  applyBtn: {
    backgroundColor: "#22c55e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  stopBtn: {
    backgroundColor: "#ef4444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontWeight: "600" },
  powerRow: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  powerBox: {
    backgroundColor: "#f9fafb",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "40%",
  },
});
