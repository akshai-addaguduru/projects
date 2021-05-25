package edu.udayton.currencyconverter;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;

import java.text.DecimalFormat;

public class MainActivity extends Activity {

    private final double EURO_CONVERSION_RATE = 0.887;
    private final double PESO_CONVERSION_RATE = 19.192;
    private final double CAD_CONVERSION_RATE = 1.333;

    private double dollarsEntered, convertedCurrency;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button btnConvert = (Button)findViewById(R.id.btnConvert);

        View.OnClickListener btnConvertListener = new View.OnClickListener() {

            final EditText txtUSD = (EditText)findViewById(R.id.txtUSD);
            final RadioButton radToEuros = (RadioButton)findViewById(R.id.radToEuros);
            final RadioButton radToPeso = (RadioButton)findViewById(R.id.radToPeso);
            final RadioButton radToCAD = (RadioButton)findViewById(R.id.radToCAD);
            final TextView textResult = (TextView) findViewById(R.id.textResult);

            final DecimalFormat formatter = new DecimalFormat("#.#");
            @Override
            public void onClick(View v) {
                //get user input (USD) as a string
                String InputString = txtUSD.getText().toString();
                    //set up output string
                String OutputString = "Invalid Data Entered";

                //convert with only valid data

                try
                {
                    //convert dollar to double
                    dollarsEntered = Double.parseDouble(InputString);

                    //check which conversion radio button is selected

                    if (radToEuros.isChecked())
                    {
                        convertedCurrency = dollarsEntered * EURO_CONVERSION_RATE;
                        OutputString = formatter.format(convertedCurrency) + " EUROS";
                    }
                    if (radToPeso.isChecked())
                    {
                        convertedCurrency = dollarsEntered * PESO_CONVERSION_RATE;
                        OutputString = formatter.format(convertedCurrency) + " MEXICAN PESOS";
                    }
                    else if (radToCAD.isChecked())
                    {
                        convertedCurrency = dollarsEntered * CAD_CONVERSION_RATE;
                        OutputString = formatter.format(convertedCurrency) + " CANADIAN DOLLARS";
                    }

                } catch (Exception e)
                {
                    Toast myToast = Toast.makeText(MainActivity.this, e.toString(), Toast.LENGTH_LONG);
                    myToast.show();
                }

                //display output to textResult TextView
                textResult.setText(OutputString);
            } //end onClick handler
        };

        //set btnConvert button listener
        btnConvert.setOnClickListener(btnConvertListener);
    } //end onCreate method
} //end MainActivity class
