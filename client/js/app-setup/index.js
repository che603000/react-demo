/**
 * Created by alex on 09.11.2015.
 */

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

_.extend(Backbone.Validation.messages, {
    required: 'Обязательное поле',
    minLength: '{0} должен содержать не менее {1} символов',
    email: 'Не похоже на электронную почту...',
    equalTo: 'Поле должно совпадать с {1}.'
});
