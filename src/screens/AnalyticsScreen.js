import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ChartCard from '../components/ChartCard';
import StatCard from '../components/StatCard';

const AnalyticsScreen = () => {
  const barChartData = {
    labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
      },
    ],
  };

  const lineChartData = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    datasets: [
      {
        data: [50, 70, 60, 90],
        color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Crecimiento de Usuarios'],
  };

  const pieChartData = [
    {
      name: 'Web',
      population: 45,
      color: '#667eea',
      legendFontColor: '#6B7280',
      legendFontSize: 12,
    },
    {
      name: 'Mobile',
      population: 35,
      color: '#10B981',
      legendFontColor: '#6B7280',
      legendFontSize: 12,
    },
    {
      name: 'Desktop',
      population: 20,
      color: '#F59E0B',
      legendFontColor: '#6B7280',
      legendFontSize: 12,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics</Text>
        <Text style={styles.subtitle}>Estadísticas detalladas</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.halfCard}>
          <StatCard
            title="Visitas Hoy"
            value="2,847"
            icon="eye"
            color="#667eea"
            trend="up"
            trendValue="+5.2%"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfCard}>
          <StatCard
            title="Páginas/Sesión"
            value="4.2"
            icon="documents"
            color="#10B981"
            trend="up"
            trendValue="+1.3%"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfCard}>
          <StatCard
            title="Tiempo Promedio"
            value="3:45"
            icon="time"
            color="#8B5CF6"
            trend="up"
            trendValue="+0.8%"
          />
        </View>
      </View>

      <ChartCard
        title="Visitas por Día"
        type="bar"
        data={barChartData}
      />

      <ChartCard
        title="Crecimiento Semanal"
        type="line"
        data={lineChartData}
      />

      <ChartCard
        title="Tráfico por Plataforma"
        type="pie"
        data={pieChartData}
      />

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    padding: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 0,
  },
  halfCard: {
    flex: 1,
  },
  bottomPadding: {
    height: 20,
  },
});

export default AnalyticsScreen;
