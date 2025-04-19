import { ZoomIn } from 'lucide-react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { SvgUri, Use } from 'react-native-svg';

interface FlagProps {
    countryCode: string;
}

const FLAG_WIDTH = 16;
const FLAG_HEIGHT = 11;

const flagMap: { [code: string]: number } = {
    // A ordem baseada na sua imagem
    ASEAN: 0,
    WS: 1, // Samoa
    PN: 2, // Ilhas Pitcairn
    TK: 3, // Tokelau
    ZW: 4, // Zimbábue
    ZM: 5, // Zâmbia
    ZA: 6, // África do Sul
    WF: 7, // Wallis e Futuna
    SZ: 8, // Essuatíni
    NR: 9, // Nauru
    PW: 10, // Palau
    AS: 11, // Samoa Americana
    FR: 12, // França
    VU: 13, // Vanuatu
    VN: 14, // Vietnã
    VI: 15, // Ilhas Virgens Americanas
    VG: 16, // Ilhas Virgens Britânicas
    AU: 17, // Austrália
    NZ: 18, // Nova Zelândia
    JP: 19, // Japão
    CN: 20, // China
    IN: 21, // Índia
    US: 22, // Estados Unidos
    BR: 23, // Brasil
    RU: 24, // Rússia
    DE: 25, // Alemanha
    IT: 26, // Itália
    ES: 27, // Espanha
    // Add more flags as needed in the correct order
};

const Flag: React.FC<FlagProps> = ({ countryCode }) => {
    const index = flagMap[countryCode.toUpperCase()];
    if (index === undefined) return null;

    const viewBoxY = index * FLAG_HEIGHT;

    return (
        <View style={[styles.container]}>
            <Svg
                width={16}
                height={11}
                viewBox={`0 ${viewBoxY} ${FLAG_WIDTH} ${FLAG_HEIGHT}`}
            >
                <SvgUri uri={"https://cdn.investing.com/next_/images/components/flags/flags.svg"} />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: FLAG_WIDTH,
        height: FLAG_HEIGHT,
        overflow: 'hidden',
    },
});

export default Flag;
