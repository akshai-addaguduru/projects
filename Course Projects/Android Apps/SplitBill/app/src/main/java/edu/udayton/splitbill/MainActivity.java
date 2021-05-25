package edu.udayton.splitbill;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //activity 1

        Button btnView = (Button)findViewById(R.id.btnView);

        //add event handler for Button btnAvicii

        View.OnClickListener btnViewListener = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Create an intent for the News screen

                Intent appIntent = new Intent(MainActivity.this, SplitBillPage.class);

                //Start a new Activity with the appIntent

                startActivity(appIntent);

            }
        };

        //set the btnViewListener as btnView's event handler

        btnView.setOnClickListener(btnViewListener);
    }
}
