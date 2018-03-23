from django.contrib import auth
from django.shortcuts import render, redirect
from design.models import Design


def design(request, edit_id = None):

    design = Design.objects.all()

    ctx = {
        'errors':{},
        'designList':design,
    }

    if edit_id:
        try:
            design = Design.objects.get(pk = edit_id)
        except Design.DoesNotExist:
            pass
        else:
            ctx['id'] = design.id
            ctx['lastname_attrs'] = design.lastname_attrs
            ctx['firstname_attrs'] = design.firstname_attrs
            ctx['phone_attrs'] = design.phone_attrs
            ctx['email_attrs'] = design.email_attrs
            ctx['fax_attrs'] = design.fax_attrs
            ctx['position_attrs'] = design.position_attrs
            ctx['name'] = design.name


    if request.method == 'POST':
        design_id = request.POST.get('id')
        name = request.POST.get('addName')
        lastname_attrs = request.POST.get('lastname_attrs')
        firstname_attrs = request.POST.get('firstname_attrs')
        phone_attrs = request.POST.get('phone_attrs')
        email_attrs = request.POST.get('email_attrs')
        fax_attrs = request.POST.get('fax_attrs')
        position_attrs = request.POST.get('position_attrs')

        if len(name) == 0 :
            ctx['errors']['name'] = 'Дизайны нэрийг оруулна уу'
        if len(lastname_attrs) == 0:
            ctx['errors']['lastname_attrs'] = 'Овог талбар дахь дизайныг оруулна уу'
        if len(firstname_attrs) == 0 :
            ctx['errors']['firstname_attrs'] = 'Нэр талбар дахь дизайныг оруулна уу'
        if len(phone_attrs) == 0 :
            ctx['errors']['phone_attrs'] = 'Утас талбар дахь дизайныг оруулна уу'
        if len(email_attrs) == 0 :
            ctx['errors']['email_attrs'] = 'e-mail талбар дахь дизайныг оруулна уу'
        if len(fax_attrs) == 0:
            ctx['errors']['fax_attrs'] = 'Факс талбар дахь дизайныг оруулна уу'
        if len(position_attrs) == 0:
            ctx['errors']['position_attrs'] = 'Албан тушаал талбар дахь дизайныг оруулна уу'
        
        if len(name) != 0 and len(lastname_attrs) != 0 and len(firstname_attrs) != 0 and len(phone_attrs) != 0 and len(email_attrs) != 0 and len(fax_attrs) != 0 and len(position_attrs) != 0:
            if design_id:
                design = Design.objects.get(pk=design_id)
                design.name = name
                design.lastname_attrs = lastname_attrs
                design.firstname_attrs = firstname_attrs
                design.phone_attrs = phone_attrs
                design.email_attrs = email_attrs
                design.fax_attrs = fax_attrs
                design.position_attrs = position_attrs
                design.save()
            else:
                design = Design()

                try:
                       design = Design.objects.get(name = name)
                except design.DoesNotExist:
                       design.name = name
                       design.lastname_attrs = lastname_attrs
                       design.firstname_attrs = firstname_attrs
                       design.phone_attrs = phone_attrs
                       design.email_attrs = email_attrs
                       design.fax_attrs = fax_attrs
                       design.position_attrs = position_attrs
                       design.save()
                else:
                       ctx['errors']['name'] = 'Ийм нэртэй дизайн үүссэн байна! Дахин оруулна уу!'


    return render(request,'design/design.html' ,ctx)


def delete(request, designId):
    #if request.session.get('is_logged_in')!=True:
        #return redirect('login')
    design = Design.objects.get(pk = designId)
    design.delete()
    return redirect('design')


def search(request):
    ctx = {}
    return render(request, 'design/design.html',ctx)


def print(request):
    ctx = {}
    return render(request, 'design/design.html',ctx)    
