from deep_translator import GoogleTranslator


def translate_to_en(to_field):
    return GoogleTranslator(source="auto", target="en").translate(to_field)


def translate_product_paragraph(instance):
    if not instance.paragraph_en:
        instance.paragraph_en = translate_to_en(instance.paragraph_uk)
    if not instance.addition_paragraph_en and instance.addition_paragraph_uk:
        instance.addition_paragraph_en = translate_to_en(instance.addition_paragraph_uk)

def translate_service(instance):
    if not instance.service_name_en:
        instance.service_name_en = translate_to_en(instance.service_name_uk)
    if not instance.service_description_en:
        instance.service_description_en = translate_to_en(
            instance.service_description_uk
        )
