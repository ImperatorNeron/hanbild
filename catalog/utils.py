from deep_translator import GoogleTranslator


def translate_to_en(to_field):
    return GoogleTranslator(source="auto", target="en").translate(to_field)
