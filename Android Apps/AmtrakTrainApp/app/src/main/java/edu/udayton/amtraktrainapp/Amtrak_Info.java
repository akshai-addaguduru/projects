package edu.udayton.amtraktrainapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.widget.ImageView;
import android.widget.TextView;

public class Amtrak_Info extends AppCompatActivity {

    private SharedPreferences sharedPref;
    private static final String OUTPUT_PREFIX="Your arrival time is ";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_amtrak__info);

        sharedPref = PreferenceManager.getDefaultSharedPreferences(this);


        final TextView output = (TextView)findViewById(R.id.txtOutput);
        final ImageView img=(ImageView)findViewById(R.id.imgOutput);


        int boardingTimeInHours = sharedPref.getInt(MainActivity.DURATION_HOURS_KEY,MainActivity.DEFAULT_BOARDING_HOURS);
        int boardingTimeInMinutes = sharedPref.getInt(MainActivity.DURATION_MINUTES_KEY,MainActivity.DEFAULT_BOARDING_MINUTES);
        int lengthMinutes = sharedPref.getInt(MainActivity.LENGTH_MINUTES,MainActivity.DEFAULT_LENGTH_MINUTES);

        String resultString = "";


        if(boardingTimeInHours > MainActivity.DEFAULT_BOARDING_HOURS && boardingTimeInMinutes > MainActivity.DEFAULT_BOARDING_MINUTES && lengthMinutes > MainActivity.DEFAULT_LENGTH_MINUTES ){


            int totalminutes = boardingTimeInMinutes + lengthMinutes;
            int hours_from_totalminutes = totalminutes/60;
            int minutes_from_totalminutes = totalminutes%60;

            int final_minutes = minutes_from_totalminutes;
            int final_hours = boardingTimeInHours + hours_from_totalminutes;

            if(final_hours>=24){
                final_hours = final_hours - 24;
            }
            if(final_hours>=0 && final_hours<=6){
                resultString = "Red-Eye Arrival\n\n "+OUTPUT_PREFIX + final_hours+" hours  and  "+final_minutes+" minutes";
            }
            else{
                resultString = OUTPUT_PREFIX + final_hours+" hours  and "+final_minutes+" minutes";
            }

            output.setText(resultString);


            if(final_hours>=0 && final_hours<=6){
                img.setImageResource(R.drawable.train2);
            }
            else{
                img.setImageResource(R.drawable.redtrain);
            }

        }

    }
}
