import { Button, Card, Input, Text } from '@ui-kitten/components';
import React, { Component, } from 'react';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';
import { Dimensions, StyleSheet, View } from 'react-native';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {

    render() {
        const { etanol, gasolina, resultado, calculate, handleForm } = this.props.homeStore;

        return (<View style={styles.container}>
            <Card style={styles.card}>
                <Text>Valor do Etanol (em R$)</Text>
                <Input value={etanol.toString()} onChangeText={(etanol) => handleForm({ etanol })} keyboardType="numeric" />

                <Text>Valor da Gasolina (em R$)</Text>
                <Input value={gasolina.toString()} onChangeText={(gasolina) => handleForm({ gasolina })} keyboardType="numeric" />

                <Button style={styles.button} onPress={() => calculate()}>Calcular</Button>

                <Text style={styles.paragraph}>{`RESULTADO: \n${resultado}`}</Text>
            </Card>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    card: {
        width: Dimensions.get('window').width - 50
    },
    button: {
        marginVertical: 15
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
