from docutils import nodes
from docutils.parsers.rst import Directive


class Nuevo(Directive):

    def run(self):
        paragraph_node = nodes.image()
        paragraph_node['uri'] = "/_static/_media/nuevo.png"
        return [paragraph_node]


def setup(app):
    app.add_directive("nuevo", Nuevo)

    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
