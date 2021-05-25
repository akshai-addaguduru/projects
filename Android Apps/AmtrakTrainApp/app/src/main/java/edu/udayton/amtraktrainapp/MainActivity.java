package edu.udayton.amtraktrainapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private int boardingTimeInHours;
    private int boardingTimeInMinutes;
    private int lengthMinutes;

    public static final String DURATION_HOURS_KEY="key1",
            DURATION_MINUTES_KEY="key2",LENGTH_MINUTES="key3";

    public static final int DEFAULT_BOARDING_HOURS=0;
    public static final int DEFAULT_BOARDING_MINUTES=0;
    public static final int DEFAULT_LENGTH_MINUTES=0;

    private SharedPreferences sharedPref;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button btnArrival=(Button)findViewById(R.id.btnArrivalTime);
        sharedPref = PreferenceManager.getDefaultSharedPreferences(this);


        showBoardingHours();
        showBoardingMinutes();
        showLengthMinutes();

        View.OnClickListener btnArrivalListener = new View.OnClickListener() {


            final EditText textBoardingTimeHours = (EditText)findViewById(R.id.txtBoardHrs);
            final EditText textBoardingTimeMinutes = (EditText)findViewById(R.id.txtBoardMin);
            final EditText textLengthMinutes = (EditText)findViewById(R.id.txtTripLength);


            private boolean validateDurationHours(int input){
                return (input>0 && input<=23);
            }


            private boolean validateDurationMinutes(int input){
                return (input>=0 && input<=59);
            }


            private boolean validateLengthMinutes(int input){
                return(input>0 && input<=1500);
            }
            @Override
            public void onClick(View v) {


                String durationHours = textBoardingTimeHours.getText().toString();

                try{
                    boardingTimeInHours = Integer.parseInt(durationHours);

                    if(validateDurationHours(boardingTimeInHours)==false){
                        throw new Exception("Invalid Hours for Boarding time, Please enter value >0 and <=23");
                    }
                }
                catch(Exception e){
                    Toast toast = Toast.makeText(MainActivity.this,"Invalid Hours for Boarding time, Please enter value >0 and <=23",Toast.LENGTH_LONG);
                    toast.show();
                    return;
                }


                String durationMinutes = textBoardingTimeMinutes.getText().toString();

                try{
                    boardingTimeInMinutes = Integer.parseInt(durationMinutes);

                    if(validateDurationMinutes(boardingTimeInMinutes)==false){
                        throw new Exception("Invalid Minutes for Boarding time, Please enter value >0 and <=59");
                    }
                }
                catch(Exception e){
                    Toast toast = Toast.makeText(MainActivity.this,"Invalid Minutes for Boarding time, Please enter value >0 and <=59",Toast.LENGTH_LONG);
                    toast.show();
                    return;
                }



                String lengthMins = textLengthMinutes.getText().toString();

                try{
                    lengthMinutes = Integer.parseInt(lengthMins);

                    if(validateLengthMinutes(lengthMinutes)==false){
                        throw new Exception("Invalid Minutes for Length of travel, Please enter value >0 and <=1500");
                    }
                }
                catch(Exception e){
                    Toast toast = Toast.makeText(MainActivity.this,"Invalid Minutes for Length of travel, Please enter value >0 and <=1500",Toast.LENGTH_LONG);
                    toast.show();
                    return;
                }


                SharedPreferences.Editor editor= sharedPref.edit();
                editor.putInt(DURATION_HOURS_KEY,boardingTimeInHours);
                editor.putInt(DURATION_MINUTES_KEY,boardingTimeInMinutes);
                editor.putInt(LENGTH_MINUTES,lengthMinutes);
                editor.commit();


                Intent intent = new Intent(MainActivity.this,Amtrak_Info.class);
                startActivity(intent);



            }
        };



        btnArrival.setOnClickListener(btnArrivalListener);
    }


    private void showBoardingHours()
    {

        final EditText textBoardingTimeHours = (EditText)findViewById(R.id.txtBoardHrs);

        boardingTimeInHours = sharedPref.getInt(DURATION_HOURS_KEY,DEFAULT_BOARDING_HOURS);

        if(boardingTimeInHours > DEFAULT_BOARDING_HOURS){
            textBoardingTimeHours.setText(Integer.toString(boardingTimeInHours));
        }

    }


    private void showBoardingMinutes()
    {
        final EditText textBoardingTimeMinutes = (EditText)findViewById(R.id.txtBoardMin);

        boardingTimeInMinutes = sharedPref.getInt(DURATION_MINUTES_KEY,DEFAULT_BOARDING_MINUTES);

        if(boardingTimeInMinutes > DEFAULT_BOARDING_MINUTES){
            textBoardingTimeMinutes.setText(Integer.toString(boardingTimeInMinutes));
        }

    }


    private void showLengthMinutes()
    {
        final EditText textLengthMinutes = (EditText)findViewById(R.id.txtTripLength    );

        lengthMinutes = sharedPref.getInt(LENGTH_MINUTES,DEFAULT_LENGTH_MINUTES);

        if(lengthMinutes > DEFAULT_LENGTH_MINUTES){
            textLengthMinutes.setText(Integer.toString(lengthMinutes));
        }

    }
} //end MainActivity class
