| Skill | Level |
| ---- | ---- |
{% assign skills = site.data.skills.soft | sort: "title" -%}
{% for skill in skills -%}
| {{skill.title}} | {{skill.level}} |
{%endfor%}
