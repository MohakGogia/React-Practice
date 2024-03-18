import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({userInput}) {    
    const results = calculateInvestmentResults(userInput);

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Investment</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(yrData => {  
                    return (
                        <tr key={yrData.year}>
                            <td>{yrData.year}</td>
                            <td>{formatter.format(yrData.valueEndOfYear)}</td>
                            <td>{formatter.format(yrData.interest)}</td>
                            <td>{formatter.format(yrData.valueEndOfYear + yrData.interest)}</td>
                            <td>{formatter.format(yrData.annualInvestment)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}