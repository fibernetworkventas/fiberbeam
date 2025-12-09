import React from 'react';
import { ScrollView, View, Text, StyleSheet, RefreshControl } from 'react-native';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import ActivityItem from '../components/ActivityItem';

const DashboardScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const lineChartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(102, 126, 234, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Ventas Mensuales'],
  };

  const recentActivity = [
    {
      id: 1,
      icon: 'cart',
      title: 'Nueva venta',
      description: 'Pedido #1234 completado',
      time: 'Hace 5 min',
      color: '#10B981',
    },
    {
      id: 2,
      icon: 'person-add',
      title: 'Nuevo usuario',
      description: 'Juan Perez se registró',
      time: 'Hace 15 min',
      color: '#667eea',
    },
    {
      id: 3,
      icon: 'chatbubble',
      title: 'Nuevo mensaje',
      description: 'Tienes 3 mensajes nuevos',
      time: 'Hace 30 min',
      color: '#F59E0B',
    },
    {
      id: 4,
      icon: 'alert-circle',
      title: 'Alerta del sistema',
      description: 'Actualización disponible',
      time: 'Hace 1 hora',
      color: '#EF4444',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Bienvenido de vuelta</Text>
        <Text style={styles.subtitle}>Aquí está el resumen de hoy</Text>
      </View>

      <StatCard
        title="Ingresos Totales"
        value="$24,580"
        icon="wallet"
        color="#667eea"
        trend="up"
        trendValue="+12.5%"
      />

      <StatCard
        title="Usuarios Activos"
        value="1,234"
        icon="people"
        color="#10B981"
        trend="up"
        trendValue="+8.2%"
      />

      <StatCard
        title="Pedidos Pendientes"
        value="56"
        icon="cube"
        color="#F59E0B"
        trend="down"
        trendValue="-3.1%"
      />

      <StatCard
        title="Tasa de Conversión"
        value="3.24%"
        icon="trending-up"
        color="#8B5CF6"
        trend="up"
        trendValue="+0.8%"
      />

      <ChartCard title="Ventas Mensuales" type="line" data={lineChartData} />

      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Actividad Reciente</Text>
        <View style={styles.activityCard}>
          {recentActivity.map((item) => (
            <ActivityItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              time={item.time}
              color={item.color}
            />
          ))}
        </View>
      </View>

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
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  activitySection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomPadding: {
    height: 20,
  },
});

export default DashboardScreen;
