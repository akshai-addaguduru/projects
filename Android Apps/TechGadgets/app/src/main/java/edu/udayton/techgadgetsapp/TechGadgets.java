package edu.udayton.techgadgetsapp;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.Arrays;
import java.util.List;

public class TechGadgets extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //convert tech-gadgets into a string-array to a list
        List<String> Gadgets = Arrays.asList(getResources().getStringArray(R.array.listGadgets));
        setListAdapter(new ArrayAdapter<String>(this, R.layout.activity_tech_gadgets, R.id.txtGadget1, Gadgets));

    } //end onCreate method

    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        Intent itemIntent;

        switch (position)
        {
            case 0:
                itemIntent = new Intent(TechGadgets.this, PictureActivity.class);
                itemIntent.putExtra(PictureActivity.LBL_KEY,getResources().getString(R.string.txtGadget1));
                itemIntent.putExtra(PictureActivity.ID_KEY,Integer.toString(R.drawable.playdate));
                break;
            case 1:
                itemIntent = new Intent(TechGadgets.this, PictureActivity.class);
                itemIntent.putExtra(PictureActivity.LBL_KEY,getResources().getString(R.string.txtGadget2));
                itemIntent.putExtra(PictureActivity.ID_KEY,Integer.toString(R.drawable.oculus));
                break;
            case 2:
                itemIntent = new Intent(TechGadgets.this, PictureActivity.class);
                itemIntent.putExtra(PictureActivity.LBL_KEY,getResources().getString(R.string.txtGadget3));
                itemIntent.putExtra(PictureActivity.ID_KEY,Integer.toString(R.drawable.dji_osmo));
                break;
            case 3:
                itemIntent = new Intent(TechGadgets.this, PictureActivity.class);
                itemIntent.putExtra(PictureActivity.LBL_KEY,getResources().getString(R.string.txtGadget4));
                itemIntent.putExtra(PictureActivity.ID_KEY,Integer.toString(R.drawable.pixel_3a));
                break;
            case 4:
                itemIntent = new Intent(TechGadgets.this, PictureActivity.class);
                itemIntent.putExtra(PictureActivity.LBL_KEY,getResources().getString(R.string.txtGadget5));
                itemIntent.putExtra(PictureActivity.ID_KEY,Integer.toString(R.drawable.galaxy_s10));
                break;
            default:
                Toast toast = Toast.makeText(TechGadgets.this,"Invalid Choice Made", Toast.LENGTH_LONG);
                toast.show();
                itemIntent = null;

        }

        if(itemIntent != null)
        {
            startActivity(itemIntent);
        }
    }
} //end MainActivity class
