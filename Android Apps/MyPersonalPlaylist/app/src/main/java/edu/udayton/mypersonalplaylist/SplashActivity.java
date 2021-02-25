package edu.udayton.mypersonalplaylist;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.util.Timer;
import java.util.TimerTask;

public class SplashActivity extends AppCompatActivity {

    private static final long DELAY = 6000;   // 6 seconds
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        TimerTask task = new TimerTask() {
            @Override
            public void run() {

                finish();
                Intent intent = new Intent(SplashActivity.this,MainActivity.class);
                startActivity(intent);
            }  //end run method
        };

        Timer opening = new Timer();
        opening.schedule(task,DELAY);
    } // end of onCreate method
}   // end of Splash class