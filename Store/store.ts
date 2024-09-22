import { PropMoeda } from "@/components/BoxMoeda/Moeda";
import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "InitialValue";

const StoreDataSet = async (data: string[]) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error setting item:", error);
  }
};

export const GetstoreData = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    await AsyncStorage.clear();
    console.error("Error getting item:", error);
    return null;
  }
};

export const UpdateData = async (data: string[]) => {
  try {
    await AsyncStorage.removeItem(key).then(async (r) => {
      await StoreDataSet(data);
    });
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

export const removeItem = async (Code: string) => {
  try {
    const d = await GetstoreData();
    const dd = d.filter((d: string) => d != Code);
    console.log(dd);
    if (dd) {
      UpdateData(dd);
    }
    return dd;
  } catch (error) {
    console.error("Error removing item:", error);
  }
};
