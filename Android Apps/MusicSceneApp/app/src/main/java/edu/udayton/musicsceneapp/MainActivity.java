package edu.udayton.musicsceneapp;

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

        Button btnAvicii = (Button)findViewById(R.id.btnAvicii);

        //add event handler for Button btnAvicii

        View.OnClickListener btnAviciiListener = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Create an intent for the News screen

                Intent newsIntent = new Intent(MainActivity.this, AviciiNews.class);

                //Start a new Activity with the newsIntent

                startActivity(newsIntent);

            }
        };

        //set the btnAviciiListener as btnAvicii's event handler

        btnAvicii.setOnClickListener(btnAviciiListener);


        //activity2

        Button btnChainsmokers = (Button)findViewById(R.id.btnChainsmokers);

        //add event handler for Button btnAvicii

        View.OnClickListener btnChainsmokersListener = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Create an intent for the News screen

                Intent newsIntent = new Intent(MainActivity.this, ChainsmokersNews.class);

                //Start a new Activity with the newsIntent

                startActivity(newsIntent);

            }
        };

        //set the btnChainsmokersListener as btnChainsmokers event handler

        btnChainsmokers.setOnClickListener(btnChainsmokersListener);

    }
}
