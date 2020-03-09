import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanningComponent from "../Widgets/Planning"
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

function Planning() {
  return (
      <PlanningComponent/>
  );
}

function News() {
  return (
    <ScrollView>
      <Card>
        <Text style={{fontSize: 18}}>France 2</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 18}}>Canal +{"\n"}</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 18}}>TMC{"\n"}</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 18}}>MTV{"\n"}</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 18}}>TF1{"\n"}</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 18}}>Gulli{"\n"}</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 18}}>W9{"\n"}</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 18}}>Arte{"\n"}</Text>
        <Text>Date{"\n"}</Text>
        <Text>Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.</Text>
      </Card>
    </ScrollView>
  );
}

function EmissionPopulaire() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>EmissionPopulaire !</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function TélévisionScreen() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Planning" component={Planning} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Emission Populaire" component={EmissionPopulaire} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});