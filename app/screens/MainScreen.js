import React, { useEffect } from 'react';
import {
    StyleSheet, Text, View,
    ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppData } from '../store/slices/appData';

const MainScreen = () => {
    const dispatch = useDispatch();
    const { data, dataLoader } = useSelector(state => state.appData);

    useEffect(() => {
        dispatch(fetchAppData("0", (Platform.OS === 'ios' ? "1" : "0")));
    }, []);

    return (
        <View>
            {
                dataLoader
                    ? <ActivityIndicator />
                    : <Text>{JSON.stringify(data)}</Text>
            }
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({});
