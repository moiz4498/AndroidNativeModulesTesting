package com.testproject.helloworldsquare;

import android.graphics.Color;
import android.graphics.RenderNode;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;


public class HelloWorldSquareManager extends SimpleViewManager<RelativeLayout> {
    public static final String REACT_CLASS = "HelloWorldSquare";
    private ThemedReactContext mContext;
    private RelativeLayout view;
    
    @Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS;
    }

    @Override
    public RelativeLayout createViewInstance(ThemedReactContext context){
        mContext = context;
        view = new RelativeLayout(mContext);
        view.setBackgroundColor(Color.BLUE);
        TextView textView = new TextView(mContext);
        textView.setId('1');
        textView.setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));
        textView.setTextColor(Color.WHITE);
        view.addView(textView);
        return view;
    }

    @ReactProp(name = "exampleProp")
    public void setExampleProp(RelativeLayout view, String prop) {
        // Set properties from React onto your native component via a setter method
        // https://facebook.github.io/react-native/docs/native-components-android.html#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation
        view.<TextView>findViewById('1').setText(prop);
        this.createViewInstance(mContext);
        
    }
}