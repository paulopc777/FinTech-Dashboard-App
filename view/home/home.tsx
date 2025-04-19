import { View, StatusBar, FlatList } from "react-native";
import React from "react";

import { MainStyles } from "@/styles/main";
import { useEffect, useState } from "react";
import Moeda from "@/components/BoxMoeda/Moeda";
import { GetstoreData, removeItem, UpdateData } from "@/Store/store";
import { Inter_900Black, Inter_500Medium, useFonts } from "@expo-google-fonts/inter";
import ToastManager from "toastify-react-native";
import Header from "@/components/Header/Header";
import Flag from "@/components/Flags/Flags";


export default function HomePage() {
    const [fontLoad] = useFonts({ Inter_900Black, Inter_500Medium });

    const [data, setData] = useState<string[]>();

    const handleDelete = async (Code: string) => {
        const d = await removeItem(Code);
        setData(d);
    };

    useEffect(() => {
        async function fetch() {
            const dd = await GetstoreData();
            setData(dd);
        }
        fetch();
    }, []);

    useEffect(() => {
        if (data && data.length > 0) {
            UpdateData(data);
        }
    }, [data]);

    return (
        <View style={{ flex: 1, width: "100%", padding: 50 }}>
            <StatusBar backgroundColor="#18171F" barStyle={"light-content"} />
            <ToastManager
                style={{ width: `${90}vw` }}
                height={60}
                textStyle={{ ...MainStyles.Text_second, fontSize: 20 }}
            />

            {fontLoad && (
                <View style={{ width: `100%` }}>
                    <Header setData={setData} />

                    {!!data && (
                        <FlatList
                            style={{ width: `${100}%` }}
                            data={data}
                            renderItem={({ item }) => (
                                <View style={{ marginVertical: 5 }}>
                                    <Moeda Code={item} key={item} handleDelete={handleDelete} />
                                </View>
                            )}
                        />
                    )}
                </View>
            )}
        </View>
    );
}
