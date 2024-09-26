import { View, StatusBar, FlatList } from "react-native";
import React from "react";

import { MainStyles } from "@/styles/main";
import { useEffect, useState } from "react";
import Moeda from "@/components/BoxMoeda/Moeda";
import { GetstoreData, removeItem, UpdateData } from "@/Store/store";

import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Color } from "@/constants/Color";
import ToastManager from "toastify-react-native";
import Menu from "@/components/menuAdd/menu";


export default function App() {
  const [fontLoad] = useFonts({ Inter_900Black });

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
    <View style={MainStyles.background}>
      <StatusBar backgroundColor="#18171F" barStyle={"light-content"} />
      <ToastManager
        style={{ width: `${90}vw` }}
        height={60}
        textStyle={{ ...MainStyles.Text_second, fontSize: 20 }}
      />
      {fontLoad && (
        <View style={{ ...MainStyles.container, flex: 1 }}>
          <Menu setData={setData} />
          {!!data && (
            <FlatList
              style={{ width: `${100}%` }}
              data={data}
              renderItem={({ item }) => (
                <Moeda Code={item} key={item} handleDelete={handleDelete} />
              )}
            />
          )}
        </View>
      )}
    </View>
  );
}
