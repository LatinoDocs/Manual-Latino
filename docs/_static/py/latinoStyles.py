from pygments.style import Style
from pygments.token import Keyword, Name, Comment, String, Error, Number, Operator, Generic

class latino(Style):
    default_style = ""
    styles = {
        Comment:            'italic #7D8B99',
        Keyword:            'bold #b400ef',
        Name:               '#f00',
        Name.Function:      '#c92c2c',
        Name.Class:         'bold #b400ef',
        String:             '#2f9c0a'
    }