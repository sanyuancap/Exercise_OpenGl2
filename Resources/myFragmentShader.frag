
varying vec4 v_fragmentColor;
varying vec2 v_coord;

uniform vec4 u_color;

void main()
{
    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0,v_coord);
}