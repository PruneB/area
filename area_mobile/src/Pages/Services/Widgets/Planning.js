import React, { Component } from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Alert} from 'react-native'

export default class PlanningComponent extends Component {
    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert = (date, nom, saison) => {
        console.log(date);
        Alert.alert(
            nom,
            'Sortie : ' + date.day + '/' + date.month + '/' + date.year + '\nSaison : ' + saison,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }

    render () {
        LocaleConfig.locales['fr'] = {
            monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
            monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
            dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
            dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
            today: 'Aujourd\'hui'
          };
          LocaleConfig.defaultLocale = 'fr';
        return (
            <CalendarList
                firstDay={1}
                pastScrollRange={6}
                futureScrollRange={12}
                dayComponent={({date, state, marking}) => {
                    return (
                    <View>
                        <TouchableOpacity style={{
                        height: 32,
                        width: 32,
                        backgroundColor: marking.selected === true ? '#00BBF2' : "white", borderRadius: 16}}
                        value={{nom: marking.nom, date: date}}
                        onPress={marking.selected === true ? () => this.showAlert(date, marking.nom, marking.season) : ""}
                        >
                            <Text style={{
                            textAlign: "center",
                            justifyContent: 'center',
                            marginTop: 6,
                            color: marking.selected === true ? 'white' : 'black',
                            }}>
                            {date.day}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    );
                }}
                markedDates={{
                    '2020-03-20': {selected: true, nom:"Brooklyn 99", season: "1"},
                    '2020-03-25': {selected: true, nom:"Desperate Housewives", season: "1"},
                    '2020-03-02': {selected: true, nom:"Friends", season: "1"},
                    '2020-04-26': {selected: true, nom:"The Big Bang Theory", season: "1"},
                    '2020-05-05': {selected: true, nom:"Game of Thrones", season: "1"},
                    '2020-05-06': {selected: true, nom:"Prison Break", season: "1"},
                    '2020-05-14': {selected: true, nom:"Le coeur a ses raisons", season: "1"},
                    '2020-06-07': {selected: true, nom:"Les raisons du coeur", season: "1"},
                    '2020-06-30': {selected: true, nom:"Scène de Ménage", season: "1"},
                    '2020-07-01': {selected: true, nom:"NCIS", season: "1"},
                    '2020-08-11': {selected: true, nom:"Engrenages", season: "1"}
                }}
                />
        )
    }
}