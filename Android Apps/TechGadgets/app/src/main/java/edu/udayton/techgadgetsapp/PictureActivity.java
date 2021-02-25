package edu.udayton.techgadgetsapp;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class PictureActivity extends AppCompatActivity {

    public static final String ID_KEY = "RES_ID",
    LBL_KEY = "LABEL";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_picture);

        //get the extras from Intent

        Intent myIntent = getIntent();

        Bundle myExtras = myIntent.getExtras();

        if (myExtras != null)       //make sure to check for extras
            {
                final String res_label = myExtras.getString(LBL_KEY);

                //display the label string in the titleTextView
                final TextView txtTitle2 = (TextView)findViewById(R.id.txtTitle2);
                txtTitle2.setText(res_label);

                //get the string extra with the key = ID_KEY
                String image_id = myExtras.getString(ID_KEY);

                //convert the Resource ID from String to Integer
                int imageId = Integer.parseInt(image_id);


                //in the pictureImageView: 1. display the image with the imageId, resource ID 2. change the cont. desc. to res-lbl string

                final ImageView pictureImageView = (ImageView)findViewById(R.id.pictureImageView);

                pictureImageView.setImageResource(imageId);

                pictureImageView.setContentDescription(res_label);

                Button button = (Button)findViewById(R.id.btnDesc);
                View.OnClickListener listener = new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent newIntent = null;

                        if ((res_label.equals(getString(R.string.txtGadget1))))
                        {
                            newIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://play.date/?utm_source=awesomestufftobuy.com&utm_medium=referral"));
                        }
                        else if ((res_label.equals(getString(R.string.txtGadget2))))
                        {
                            newIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://awesomestufftobuy.com/oculus-quest-all-in-one-vr/"));
                        }
                        else if ((res_label.equals(getString(R.string.txtGadget3))))
                        {
                            newIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.amazon.com/DJI-Digital-displays-waterproof-HDR-Video/dp/B07RS1HWZ3?tag=astb-20"));
                        }
                        else if ((res_label.equals(getString(R.string.txtGadget4))))
                        {
                            newIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://store.google.com/product/pixel_3a"));
                        }
                        else if ((res_label.equals(getString(R.string.txtGadget5))))
                        {
                            newIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.samsung.com/us/mobile/galaxy-s10/"));
                        }
                        startActivity(newIntent);
                    }
                };

                button.setOnClickListener(listener);
            }

    } //end onCreate method
}   //end pictureActivity class
