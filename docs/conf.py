import sphinx_rtd_theme

source_suffix = '.rst'

master_doc = 'index'

project = u'Manual Latino'
author = u'Melvin Guerrero'
copyright = '2015-2020, Lenguaje Latino.'

html_theme = 'sphinx_rtd_theme'
html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]
html_favicon = '_media/favicon.ico'
html_logo = '_media/ManualLatino-Logo.svg'
html_theme_options = {
    'logo_only': True,
    'display_version': False
}