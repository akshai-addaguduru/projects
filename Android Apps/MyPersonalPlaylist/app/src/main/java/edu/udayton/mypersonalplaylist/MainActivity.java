package edu.udayton.mypersonalplaylist;
import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private Button buttonBreak, buttonLove, buttonFaded;
    private MediaPlayer mpLove, mpBreak, mpFaded;
    private int playing;
    private static final int NOT_PLAYING = 0, PLAYING = 1;
    private static final String LOVE_PLAYING = "Pause",
            LOVE_PAUSED = "Play",
            FADED_PLAYING = "Pause",
            FADED_PAUSED = "Play",
            BREAK_PLAYING = "Pause",
            BREAK_PAUSED = "Play";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        buttonLove = (Button)findViewById(R.id.btnLove);
        buttonBreak = (Button)findViewById(R.id.btnBreak);
        buttonFaded = (Button)findViewById(R.id.btnFaded);

        buttonLove.setOnClickListener(bCListener);
        buttonFaded.setOnClickListener(bLListener);
        buttonBreak.setOnClickListener(bSListener);

        mpLove = new MediaPlayer();
        mpLove = MediaPlayer.create(this, R.raw.lovethewayyoulie);

        mpFaded = new MediaPlayer();
        mpFaded = MediaPlayer.create(this, R.raw.faded);

        mpBreak = new MediaPlayer();
        mpBreak = MediaPlayer.create(this, R.raw.breakyourheart);

        playing = NOT_PLAYING;

    } // end of onCreate method

    // click listener for btnLove button

    Button.OnClickListener bCListener = new Button.OnClickListener() {
        @Override
        public void onClick(View v) {

            switch (playing)
            {
                case NOT_PLAYING :
                    mpLove.start();
                    playing = PLAYING;
                    buttonLove.setText(LOVE_PLAYING);
                    buttonFaded.setVisibility(View.INVISIBLE);
                    buttonBreak.setVisibility(View.INVISIBLE);
                    break;

                case PLAYING :
                    mpLove.pause();
                    playing = NOT_PLAYING;
                    buttonLove.setText(LOVE_PAUSED);
                    buttonFaded.setVisibility(View.VISIBLE);
                    buttonBreak.setVisibility(View.VISIBLE);
                    break;
            }

        } // end of onClick handler
    };

    // click listener for btnFaded button

    Button.OnClickListener bLListener = new Button.OnClickListener() {
        @Override
        public void onClick(View v) {

            switch (playing)
            {
                case NOT_PLAYING :
                    mpFaded.start();
                    playing = PLAYING;
                    buttonFaded.setText(FADED_PLAYING);
                    buttonLove.setVisibility(View.INVISIBLE);
                    buttonBreak.setVisibility(View.INVISIBLE);
                    break;

                case PLAYING :
                    mpFaded.pause();
                    playing = NOT_PLAYING;
                    buttonFaded.setText(FADED_PAUSED);
                    buttonLove.setVisibility(View.VISIBLE);
                    buttonBreak.setVisibility(View.VISIBLE);
                    break;
            }

        } // end of onClick handler
    };

    // click listener for btnBreak button

    Button.OnClickListener bSListener = new Button.OnClickListener() {
        @Override
        public void onClick(View v) {
            switch (playing)
            {
                case NOT_PLAYING :
                    mpBreak.start();
                    playing = PLAYING;
                    buttonBreak.setText(BREAK_PLAYING);
                    buttonLove.setVisibility(View.INVISIBLE);
                    buttonFaded.setVisibility(View.INVISIBLE);
                    break;

                case PLAYING :
                    mpBreak.pause();
                    playing = NOT_PLAYING;
                    buttonBreak.setText(BREAK_PAUSED);
                    buttonLove.setVisibility(View.VISIBLE);
                    buttonFaded.setVisibility(View.VISIBLE);
                    break;
            }

        } // end of onClick handler
    };

}     // end of main class
