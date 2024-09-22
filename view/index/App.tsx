import { View } from "react-native";
import React from "react";

import { MainStyles } from "@/styles/main";
import { useEffect, useState } from "react";
import Moeda from "@/components/BoxMoeda/Moeda";
import { GetstoreData, removeItem, UpdateData } from "@/Store/store";
import StatusBarCom from "@/components/StatusBar/StatusBarCom";
import Menu from "@/components/menuAdd/Menu";

export default function App() {
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
      <StatusBarCom />
      <View style={MainStyles.container}>
        <Menu setData={setData} />
        {!!data && (
          <>
            {data.map((d) => (
              <Moeda Code={d} key={d} handleDelete={handleDelete} />
            ))}
          </>
        )}
      </View>
    </View>
  );
}
