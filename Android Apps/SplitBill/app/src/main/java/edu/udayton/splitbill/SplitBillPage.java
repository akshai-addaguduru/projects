package edu.udayton.splitbill;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import java.text.DecimalFormat;

public class SplitBillPage extends AppCompatActivity {

    private int txtCount;
    private double txtBill;
    private String txtTip;      //groupChoice


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_split_bill_page);

        //set the cost button reference
        final Button click = (Button)findViewById(R.id.btnCost);
        //validate the btnCost reference
        View.OnClickListener btnCostListener = new View.OnClickListener() {

            final EditText txtBill = (EditText)findViewById(R.id.txtBill);
            final EditText txtCount = (EditText)findViewById(R.id.txtCount);
            final TextView txtResult = (TextView)findViewById(R.id.txtResult);
            final Spinner txtTip = (Spinner)findViewById(R.id.txtTip);

            @Override
            public void onClick(View v) {
                //get cost of bill  (user input)
                Editable Bill = txtBill.getText();
                String BillString = Bill.toString();

                //get number of people
                Editable Count = txtCount.getEditableText();
                String CountString = Count.toString();

                try {
                    double txtBill = Float.parseFloat(BillString);
                    double txtCount = Float.parseFloat(CountString);
                    String S3="";
                    double tipAmount=0;

                    if(txtTip.getSelectedItem().toString().equals("Add a 20% tip for Excellent Service")) {
                        tipAmount=((20*0.01)*txtBill);
                        S3="\nOne of the best meals ever! I will recommend this place to everyone I know!\n";
                    }
                    else if(txtTip.getSelectedItem().toString().equals("Add a 15% tip for Average Service")) {
                        tipAmount = ((15*0.01)*txtBill);

                        S3= "\nEverything was OK!\n";
                    }
                    else if(txtTip.getSelectedItem().toString().equals("Add a 5% tip for a Poor Service"))
                    {
                        tipAmount=((5*0.01)*txtBill);
                        S3=("\nAwful! The worst! I can't wait to give negative reviews on Yelp!\n");
                    }
                    txtBill= txtBill+tipAmount;
                    double totalCost = txtBill/txtCount;
                    DecimalFormat currency = new DecimalFormat("$####,###.##");
                    String Output = ( "Cost of food per person is : " + currency.format(totalCost)).concat(S3);

                    txtResult.setText(Output);
                }             catch (Exception e) {
                    Log.e(e.getMessage(), e.toString());
                }
            } //end onClick handler
        };
        click.setOnClickListener(btnCostListener);
    } //end onCreate method

} //end SplitBillPage class
