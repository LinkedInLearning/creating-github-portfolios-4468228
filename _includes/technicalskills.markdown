| Skill | Level |
| ---- | ---- |
{% assign skills = site.data.skills.technical | sort: "title" -%}
{% for skill in skills -%}
| {{skill.title}} | {{skill.level}} |
{%endfor%}
