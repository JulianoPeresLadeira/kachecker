export class Utils {

    static transformNumber(textNumber: string) {
        return Number(
            textNumber
                .replace(/[a-zA-Z]/g, '')
                .replace(/\$/, '')
                .replace('.', '')
                .replace(',', '.')
        );
    }

}
