export class TempConverter {
    //function call without type checking might return errors if temp is string  //static convertFtoC(temp) { return ((parseFloat(temp.toPrecision(20)) - 32 / 1.8)).toFixed(1); }

    static convertFtoCNum(temp: number): string {
        return ((parseFloat(temp.toPrecision(20)) - 32 )/ 1.8).toFixed(1);
    }

    // demo of function that can take a number or a string as input also called as union  type
    /*static convertFtoC(temp: number | string): string { ********/
    // any key word can also be used insted of an union type like above
    static convertFtoC(temp: any) {
        let value: number = (temp as number).toPrecision ? temp as number : parseFloat(<string>temp)
        return TempConverter.performCalculation(value).toFixed(1);
    }
    private static performCalculation(value: number): number {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    }
}