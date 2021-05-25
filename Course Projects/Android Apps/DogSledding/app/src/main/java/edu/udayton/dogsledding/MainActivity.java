package edu.udayton.dogsledding;

import android.app.DatePickerDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TextView;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.Date;

public class MainActivity extends AppCompatActivity {
    private TextView resTextView; //output textView
    private static final Calendar cal = Calendar.getInstance();
    private static final DateFormat fmtDate = DateFormat.getDateInstance();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // get UI component references

        resTextView = (TextView)findViewById(R.id.resTextView);
        Button btnDate = (Button)findViewById(R.id.btnDate);

        // set listener for btnDate button

        btnDate.setOnClickListener(btnListener);

    } //end onCreate method

    // set up listener for user choosing a date
    DatePickerDialog.OnDateSetListener dateListener = new DatePickerDialog.OnDateSetListener() {
        @Override
        public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {

            cal.set(Calendar.YEAR, year);
            cal.set(Calendar.MONTH, monthOfYear);
            cal.set(Calendar.DATE, dayOfMonth);

            // get the selected date from the calendar, and show it to the user

            Date reservedDate = cal.getTime();
            resTextView.setText("Your reservation is set for " + fmtDate.format(reservedDate));

        } // end onDate set
    };

    // set up listener for the btnDate button

    Button.OnClickListener btnListener = new Button.OnClickListener()
    {

        @Override
        public void onClick(View v) {

            // get the currently-selected date from the Calendar
            // if no date/time have been selected yet, show the current date/time

            int year = cal.get(Calendar.YEAR);
            int monthOfYear = cal.get(Calendar.MONTH);
            int dayOfMonth = cal.get(Calendar.DATE);

            // create/show DatePickerDialog with the currently-selected date

            DatePickerDialog datePicDialog = new DatePickerDialog(MainActivity.this,
                    dateListener,year,monthOfYear,dayOfMonth);
            datePicDialog.show();
        } // end OnClick handler
    };
}   //end MainActivity class
