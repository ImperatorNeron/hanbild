from deep_translator import GoogleTranslator


def translate_to_en(to_field):
    return GoogleTranslator(source="auto", target="en").translate(to_field)


def translate_vacancy(instance):
    if not instance.position_en:
        instance.position_en = translate_to_en(instance.position_uk)


def translate_vacancy_description(instance):
    if not instance.text_en:
        instance.text_en = translate_to_en(instance.text_uk)
